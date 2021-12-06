const fetch = require("node-fetch");
const crypto = require("crypto");

exports.sourceNodes = async ({ actions }, configOptions) => {
  const { createNode } = actions;
  const headers = {
    Authorization: `bearer ${configOptions.token}`,
  };
  const body = {
    query: `query {
              user(login: "${configOptions.username}") {
                contributionsCollection {
                  contributionCalendar {
                      totalContributions
                  }
                }
              }
            }`,
  };
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers,
  });

  const data = await response.json();
  const { contributionsCollection } = data.data.user;
  const totalContributions =
    contributionsCollection.contributionCalendar.totalContributions;
  createNode({
    totalContributions: Number(totalContributions),
    id: "Github-Contributions",
    internal: {
      type: `GitHubContributions`,
      contentDigest: crypto
        .createHash(`md5`)
        .update(
          JSON.stringify({
            totalContributions,
          })
        )
        .digest(`hex`),
      description: `Github Contributions Information`,
    },
  });
};

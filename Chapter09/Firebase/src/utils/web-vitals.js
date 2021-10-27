import { getCLS, getFID, getLCP } from "web-vitals";

export default async function webVitals() {
  try {
    getFID((metric) => console.log(metric));
    getLCP((metric) => console.log(metric));
    getCLS((metric) => console.log(metric));
  } catch (err) {
    console.log(err);
  }
}

import { getReleaseTag } from "@saleor/sentry-utils";
import { execSync } from "node:child_process";

import packageJson from "../package.json";

const release = getReleaseTag(packageJson.version);

// eslint-disable-next-line no-console
console.log("Using release tag:", release);

execSync(`SENTRY_RELEASE='${release}' pnpm run build`, { stdio: "inherit" });

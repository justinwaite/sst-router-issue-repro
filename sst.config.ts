/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-issue-repro",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const remix = new sst.aws.Remix("MyWeb", {
      cdn: false
    });

    const router = new sst.aws.Router("MyRouter", {
      domain: 'demo.yoursite.com',
    })

    router.routeSite('demo.yoursite.com/', remix)
  },
});

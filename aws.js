const AWS = require('aws-sdk');
let awsCredentials = {
    region: "us-east-1",
    accessKeyId: "AKIAVSLBGXBARSILIX6E",
    secretAccessKey: "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"
};
AWS.config.update(awsCredentials);
module.exports = {
    getUrl: async function getDashboardEmbedURL() {
        const getDashboardParams = {
            AwsAccountId: "382992824385",
            DashboardId: "2591169b-2392-41aa-b914-89b3329a422a",
            Namespace: "xxx",
            IdentityType: 'IAM',
            SessionLifetimeInMinutes: 600,
            UndoRedoDisabled: undoRedoDisabled
        };
        const quicksightGetDashboard = new AWS.QuickSight({
            region: "us-east-1",
        });
        return await new Promise((resolve, reject) => {
            quicksightGetDashboard.getDashboardEmbedUrl(getDashboardParams, function (err, data) {
                if (err) {
                    console.log(err, err.stack);
                    reject(err);
                } else {
                    const result = {
                        "statusCode": 200,
                        "headers": {
                            "Access-Control-Allow-Origin": "*", // USE YOUR WEBSITE DOMAIN TO SECURE ACCESS TO GETEMBEDURL API
                            "Access-Control-Allow-Headers": "Content-Type"
                        },
                        "body": JSON.stringify(data),
                        "isBase64Encoded": false
                    }
                    let url = JSON.parse(result.body)
                    resolve(url.EmbedUrl);
                }
            })
        })
    },
}

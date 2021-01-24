const AthenaExpress = require("athena-express");
const aws = require("aws-sdk");
const aws_config = require("./config/conf.json");
const awsCredentials = {
    region: aws_config.aws_credentials.region,
    accessKeyId: aws_config.aws_credentials.accessKeyId,
    secretAccessKey: aws_config.aws_credentials.secretAccessKey
};
aws.config.update(awsCredentials);
const athenaExpressConfig = {
    aws,
    getStats: true
};
const athenaExpress = new AthenaExpress(athenaExpressConfig);

async function getDashboardEmbedURL() {
    const getDashboardParams = {
        AwsAccountId: aws_config.AwsAccountId,
        DashboardId: aws_config.DashboardId,
        Namespace: "DashboardSummary",
        IdentityType: 'IAM',
        SessionLifetimeInMinutes: 600,
    };
    const quicksightGetDashboard = new aws.QuickSight({
        region: aws_config.aws_credentials.region,
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
}

async function createQuery(query) {
    try {
        let results = await athenaExpress.query(query);
        console.log(results);
        return results;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getUrl: getDashboardEmbedURL,
    createQuery: createQuery
}

export type AmplifyDependentResourcesAttributes = {
  "api": {
    "lakkituitions": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    },
    "tuitionsAPI": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "tuitionsWA": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    }
  },
  "auth": {
    "lakkituitions737076bf": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    }
  },
  "function": {
    "tuitionsSMS": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    },
    "tuitionsWhatsapp": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "hosting": {
    "S3AndCloudFront": {
      "CloudFrontDistributionID": "string",
      "CloudFrontDomainName": "string",
      "CloudFrontOriginAccessIdentity": "string",
      "CloudFrontSecureURL": "string",
      "HostingBucketName": "string",
      "Region": "string",
      "S3BucketSecureURL": "string",
      "WebsiteURL": "string"
    }
  }
}
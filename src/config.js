const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-upload-danrab",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://4w649c7q3c.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_GACjTbShn",
      APP_CLIENT_ID: "3ko1kp18sbn2v9s00gi4c3r491",
      IDENTITY_POOL_ID: "us-east-1:671c79f8-1a19-43ca-95dd-83d8a492efee",
    },
  };
  
  export default config;
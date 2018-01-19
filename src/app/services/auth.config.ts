interface AuthConfiguration {
    clientID: string,
    domain: string
}

interface CosmicConfiguration {
    publicID: string,
    privateID: string,
    timeStamp: string,
    apiKey: String
}

export const myConfig: AuthConfiguration = {
    clientID: 'jJ3MwRkzCV5EDBYBSQBVAd4CBnkhSDIi',
    domain: 'flight.au.auth0.com'
};

export const myCosmic: CosmicConfiguration = {
    publicID: "ec672105b5dc175d50138f04c690ccb2",
    privateID: "1fc012be4856fe201b37f86d6e7f1510311bf846",
    timeStamp: "1",
    apiKey: "developer.marvel.com"
};

import Realm from "realm";

class UserToken extends Realm.Object { }
UserToken.schema = {
    name: 'UserToken',
    properties: {
        AccessToken: 'string',
        UserId: 'string',
        provider: 'string?',
    }
};


class NotifyToken extends Realm.Object { }
NotifyToken.schema = {
    name: 'NotifyToken',
    properties: {
        NotifyToken: 'string?',
  }
};


const realm = new Realm({ schema: [UserToken, NotifyToken], schemaVersion: 11 });

export default realm
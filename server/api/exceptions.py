from rest_framework.exceptions import APIException


class MultipleOrphanageError(APIException):
    status_code = 400
    default_detail = 'only 1 orphanage per user is allowed.'


class NoUserProvidedError(APIException):
    status_code = 400
    default_detail = "A user token must be provided in the request header. Example: 'Authorization {user_token}'"

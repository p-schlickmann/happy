from rest_framework.exceptions import APIException


class BadRequest(APIException):
    status_code = 400
    default_detail = 'only 1 orphanage per user is allowed.'

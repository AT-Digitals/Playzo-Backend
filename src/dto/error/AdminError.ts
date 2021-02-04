export enum AdminError {
  USER_EXISTS = "user exists with the provided credentials",
  ADMIN_EXISTS = "An admin exists with the provided credentials",
  CATEGORY_ID_DOES_NOT_EXIST = "Cannot find a category with the given ID",
  CATEGORY_NAME_ALREADY_EXISTS = "A category with the given name already exists",
  PROPERTY_ID_DOES_NOT_EXIST = "Cannot find a property with the given ID",
  MEDIA_ID_DOES_NOT_EXIST = "Cannot find a media with the given ID",
  SPECIFICATION_CATEGORY_NOT_VALID = "Please provide one of the valid specification category",
  CAROUSEL_IMAGE_NOT_FOUND = "Cannot find a Carousel Image with given ID",
  PROPERTY_DEVELOPER_ID_DOES_NOT_EXIST = "Cannot find a property developer with the given ID",
}

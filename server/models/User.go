package User

type FormData struct{
  Email string `form:"email" binding:"required"`
	Password string `form:"password" binding:"required"`
}
type FormDataS struct{
  Name string  `form:"name" binding:required`
  Number int64  `form:"contact" binding:required`
  Email string `form:"email" binding:"required"`
	Password string `form:"password" binding:"required"`
}


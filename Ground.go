package Ground

type FutsalData struct{
  Name string  `form:"name" binding:required`
  Number int64  `form:"contact" binding:required`
  Location string `form:"Location" binding:required`
  Email string `form:"email" binding:"required"`
	Password string `form:"password" binding:"required"`
}


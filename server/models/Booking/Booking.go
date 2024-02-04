package Booking

type FormData struct{
  Time string `form:"Time" binding:"required"`
	Price string `form:"Price" binding:"required"`
}

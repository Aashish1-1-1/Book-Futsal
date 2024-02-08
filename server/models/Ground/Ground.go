package Ground

import "mime/multipart"

type Grounddata struct {
	Name     string                `form:"name" binding:"required"`
	Location string                `form:"location" binding:"required"`
	Number    int                 `form:"contact" binding:"required"`
	Email    string                `form:"email" binding:"required"`
	Password string                `form:"password" binding:"required"`
	Open     string                `form:"startTime" binding:"required"`
	End      string                `form:"endTime" binding:"required"`
	Doc      *multipart.FileHeader `form:"docImage" binding:"required"`
}

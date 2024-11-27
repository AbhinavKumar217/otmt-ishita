package com.gl.micro.user_service.dto;

import java.util.Date;

/*
    * This class is used to create a custom error response
      when an exception is thrown.
 */
public record ErrorResponse(Date timestamp, String message, String details){
	
};



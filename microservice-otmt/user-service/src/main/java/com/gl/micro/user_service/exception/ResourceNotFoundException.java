package com.gl.micro.user_service.exception;

import lombok.Getter;
/*
    it is a custom exception class to handle the exception
    when a resource is not found in the table
 */
@Getter
public class ResourceNotFoundException extends RuntimeException {
    /**
	 * 
	 */
	@SuppressWarnings("unused")
	private final String resourceName;
    @SuppressWarnings("unused")
	private final String fieldName;
    @SuppressWarnings("unused")
	private final Object fieldValue;
    public ResourceNotFoundException(String resourceName, String fieldName, Object fieldValue) {
        super(String.format("%s not found with %s : '%s'", resourceName, fieldName, fieldValue));
        this.resourceName = resourceName;
        this.fieldName = fieldName;
        this.fieldValue = fieldValue;
    }
}
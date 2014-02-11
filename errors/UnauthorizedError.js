/*
 * Copyright (c) 2014 TopCoder, Inc. All rights reserved.
 */
'use strict';

/**
 * This file defines UnauthorizedError
 *
 * @author Ghost_141, TCSASSEMBLER
 * @version 1.1
 * changes in 1.1:
 * - fix name error.
 */

/**
 * Constructor of UnauthorizedError
 * @param {Object} message the error message
 * @param {Object} cause the error cause
 */
var UnauthorizedError = function (message, cause) {
    //captureStackTrace
    Error.call(this);
    Error.captureStackTrace(this);
    this.message = message || 'Unauthorized Error';
    this.cause = cause;
};

//use Error as prototype
require('util').inherits(UnauthorizedError, Error);
UnauthorizedError.prototype.name = 'Unauthorized Error';

module.exports = UnauthorizedError;

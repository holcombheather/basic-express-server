'use strict';

module.exports = (req, res, next) => {
  if(req.query.name){
    next();
  } else {
    next('Must have name property');
  }
};

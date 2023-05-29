'use strict';

module.exports = (req, res, next) => {
  if(req.params.name){
    next();
  } else {
    next('Must have name property');
  }
};

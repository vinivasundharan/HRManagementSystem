var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  global.index = 0;
  res.render('index');
});

/* GET Employee Management page. */
router.get('/employeeManagement', function (req, res, next) {
  global.index = 1;
  res.render('employeeManagement');
});

router.get('/searchEmployee', function (req, res, next) {
  res.render('employee/searchEmployee');
});

router.get('/employeeResult', function (req, res, next) {
  res.render('employee/result');
});

router.get('/vacation', function (req, res, next) {
  res.render('employee/vacation');
});

router.get('/search', function (req, res, next) {
  res.render('search');
});

/*get kpis definitions*/
router.get('/retention', function (req, res, next) {
  res.render('kpiDefinitions/retentionOfTalent');
});

router.get('/absenteeism', function (req, res, next) {
  res.render('kpiDefinitions/absenteeism');
});

router.get('/positionDuration', function (req, res, next) {
  res.render('kpiDefinitions/positionDuration');
});

router.get('/averageTimeToGoal', function (req, res, next) {
  res.render('kpiDefinitions/averageTimeToGoal');
});

router.get('/accident', function (req, res, next) {
  res.render('kpiDefinitions/accident');
});


router.get('/myprofile', function (req, res, next) {
  res.render('myprofile');
});


/* GET Communication  page. */
router.get('/communication', function (req, res, next) {
  global.index = 2;
  res.render('communication');
});





/* GET Reports page. */
router.get('/reports', function (req, res, next) {
  res.render('reports');
});

/* GET Survey page. */
router.get('/surveys', function (req, res, next) {
  global.index = 3;
  res.render('surveys');
});

/* GET kpi page. */
router.get('/kpis', function (req, res, next) {
  global.index = 4;
  res.render('kpi');
});

/* GET Workforce page. */
router.get('/workforce', function (req, res, next) {
  global.index = 5;
  res.render('workforce');
});




/**
 * Login and Logout routes and functions
 */

/* GET login page. */
router.get('/login', function (req, res, next) {
  res.render('login', {
    layout: false,
    success : global.success,
  });
});

/* GET logout page. */
router.get('/logout', function (req, res, next) {
  global.login = false;
  res.redirect('/login');
});


/* POST login page. */
router.post('/login', function (req, res, next) {
  console.log("The Body is", req.body)
  if (req.body.email == "alex.coleman@cnbp.com" && req.body.password == "123456") {
    global.login = true;
    global.success = true;
    return res.redirect('/');
  } else {
    global.success = false;
    res.redirect('/login');
  }

});


module.exports = router;

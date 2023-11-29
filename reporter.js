const {Storage}=require('@google-cloud/storage')
const storage = new Storage();
class MyReporter {
  

  
    onBegin(config, suite) {
      console.log(`Starting the run with ${suite.allTests().length} tests`);
    }
  
    onTestBegin(test, result) {
      console.log(`Starting test ${test.title}`);
    }
  
    onTestEnd(test, result) {
      console.log(`Finished test ${test.title}: ${result.status}`);
      if(result.status=='failed'){
        console.log('send alert message');
      }
      }
  
   onEnd(result) {
      console.log(`Finished the run: ${result.status}`);
       storage.createBucket('name');
       

    }
  }


  
  module.exports = MyReporter;
  
//import groovy.json.JsonSlurper
//@Library('your-jenkins-library')_    
//import static org.utils.PipelineUtils.*

def response //= httpRequest 'http://127.0.0.1:8282'

pipeline{
    agent any
    // environment {
    //     PATH = "/usr/local/bin:${env.PATH}"
    //     }
    //parameters { 
        ////string(defaultValue: "http://127.0.0.1:8181", description: 'Reading String?', name: 'URL')
        //string(defaultValue: "http://192.168.0.177:8181", description: 'Reading String?', name: 'URL')
    //}

    stages{
       

        //pipeline Stage 1 launch your server app
          stage('launchApp'){
                  steps{
                      script {
                           try{
                                    //bat 'node Server.js'
                                    bat 'start http://127.0.0.1:8282'
                                    echo 'hello'
                                    //def response = httpRequest 'http://127.0.0.1:8282'
                                    response = httpRequest 'http://127.0.0.1:8282'
                                    echo "Status   : "+response.status
                                    echo "Content  : "+response.content 
                                    echo "Port     : "+response
                            }catch(Exception ex)
                            {
                                echo("Launch App Exception: ${ex}")
                                variable = ""
                            }//end try catch(Exception ex)
                      }  //end script                
                  } //end step
        } //end stage
        stage('verifyApp'){
                  steps{
                      script {
                           try{
                                    if(response.status == 200 && response.content=="Hello World" )
                                    {
                                             echo "File Reading Success: " 
                                             //node() {
                                                    writeFile file: 'response.txt', text: 'string equal hello world'
                                             // }    
                                    }
                                    else
                                    {
                                             echo "File Reading Fail: "   
                                             //node() {
                                                    writeFile file: 'response.txt', text: 'issue in app'
                                             // }      
                                    }
                            }catch(Exception ex)
                            {
                                writeFile file: 'response.txt', text: 'issue in app'
                                echo("Reading Exception: ${ex}")
                                variable = ""
                            }//end try catch(Exception ex)
                      }  //end script                
                  } //end step
        } //end stage
        stage('readAndDeleteApp'){
                  steps{
                      script {
                           try{
                                def data = readFile(file: 'response.txt')
                                echo  '***************** File Content  ****************'
                                echo   data 
                                echo  '****************** End Content ************'   

                                if (fileExists('response.txt')) {
                                        new File('response.txt').delete()
                                        //deleteFile('response.txt')
                                        //deleteFile('test.zip')
                                        //Files.delete('response.txt');
                                        echo "file deleted"
                                } else {
                                        echo "response.txt file not found"
                                }

                            }catch(Exception ex)
                            {
                                echo("File Deletion Exception: ${ex}")
                                variable = ""
                            }//end try catch(Exception ex)
                      }  //end script                
                  } //end step
        } //end stage

        // stage('launchApp'){
        //     steps{
        //         script {
        //             try{
        //                     //sh 'curl --version'
        //                     //bat 'curl --version'
        //                     //sh 'start https://www.google.com'
        //                     bat 'node Server.js'
        //                     //echo 'node Server.js'                         
        //             }catch(Exception ex)
        //             {
        //                     echo("Exception: ${e}")
        //                     variable = ""
        //             }//end try catch(Exception ex)
        //         }//end script   
        //     }//end steps 
        // }//end stage
       /* Pipeline Stage 2 verify app is up and running by invoke 
       web request to local app url and catch return code is 200 , 
       also catch the return string “hello world” and if succussed  
       write to local txt file ““string equal  hello world” Pipeline 
       Stage 2 in case of error in return code or “string not equal  
       hello world” write to local txt file “issue in app”*/

        // stage('verifyAndCreateFile'){
        //          steps{
        //             script {
        //            final String url = "http://127.0.0.1:8282"

        //             //withCredentials([usernameColonPassword(credentialsId: "jenkins-api-token", variable: "API_TOKEN")]) {
        //             //withCredentials([usernameColonPassword(null, variable: "API_TOKEN")]) {    
        //                 final def (String response1, int code) =
        //                     sh(script: "curl -s -w '\\n%{response_code}' -u $API_TOKEN $url", returnStdout: true)
        //                         .trim()
        //                         .tokenize("\n")

        //                         echo "HTTP response status code: $code"

        //                         if (code == 200) {  
        //                             echo 'Code Get = '+response1 
        //                             }
                                 
        //                 //}//ending withCredentials 
        //               }//ending script 
        //          }//ending steps
        //        }//ending stage('verifyAndCreateFile')
        // /* Pipeline  Stage 3 read local txt file and echo file content  
        // Pipeline  Stage 3 delete local file and close your server app*/

        // stage('readAndDeleteFile'){
        //       steps {
        //              //git branch: 'main', url: "${params.URL}"
        //              //echo "${params.URL}"

        //       }   
        //  }

        

    }//ending main->stages 
}//end of pipeline
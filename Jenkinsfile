

pipeline{
    agent any
    stages{
        //pipeline Stage 1 launch your server app
        // stage('launchApp'){
        //         steps{
        //            //sh 'node Server.js'  
        //            //bat 'start www.google.com'  
        //            bat 'node Server.js'                       
        //         }
        // }
       /* Pipeline Stage 2 verify app is up and running by invoke 
       web request to local app url and catch return code is 200 , 
       also catch the return string “hello world” and if succussed  
       write to local txt file ““string equal  hello world” Pipeline 
       Stage 2 in case of error in return code or “string not equal  
       hello world” write to local txt file “issue in app”*/

        stage('verifyAndCreateFile'){
                 steps{
                    script {
                   final String url = "http://127.0.0.1:8181"

                    withCredentials([usernameColonPassword(credentialsId: "jenkins-api-token", variable: "API_TOKEN")]) {
                        final def (String response, int code) =
                            sh(script: "curl -s -w '\\n%{response_code}' -u $API_TOKEN $url", returnStdout: true)
                                .trim()
                                .tokenize("\n")
                                echo "HTTP response status code: $code"

                                if (code == 200) {
                                    echo response
                                }
                                else
                                {
                                    echo 'fail'
                                }
                        }//withCredentials([u
                      }//ending script 
                 }//ending steps

               }//ending stage('verifyAndCreateFile')
        
        // /* Pipeline  Stage 3 read local txt file and echo file content  
        // Pipeline  Stage 3 delete local file and close your server app*/

        // stage('readAndDeleteFile'){
        //         steps{
                    
        //         }
        // }
    }//ending main->stages 
   
}
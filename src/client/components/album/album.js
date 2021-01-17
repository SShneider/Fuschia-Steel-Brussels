import AWS from 'aws-sdk'
import React, { Component} from 'react'
const myBucket = new AWS.S3({
    params: {bucket: "arn:aws:s3:::fsb-image-repository"},
    region: "us-east-1"
})
class Album extends Component{
    constructor(){
        super(),
        this.state = {
            progress: 0,
            selectedFile: null
        }
    }
    onFileChange = (e) =>{
  
        this.setState({selectedFile:e.target.files[0]})
        console.log(this.state)
    }
    uploadFile = () => {
        console.log(this.state)
        const file = this.state.selectedFile
        const params = {
          ACL: 'public-read',
          Key: file.name,
          ContentType: file.type,
          Body: file,
          Bucket: "arn:aws:s3:::fsb-image-repository",

        }
        myBucket.putObject(params)
          .on('httpUploadProgress', (evt) => {
            // that's how you can keep track of your upload progress
            this.setState({
              progress: Math.round((evt.loaded / evt.total) * 100),
            })
          })
          .send((err) => {
             if (err) {
               console.error(err)
             }
          })
    }
    render(){
    return(
        <div className="container">
            <input type="file" onChange = {this.onFileChange}></input>
            <button className="btn btn-success" onClick={this.uploadFile}>Upload</button>
        </div>
    )
    }
}



export default Album
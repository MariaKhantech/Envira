const AWS = require('aws-sdk');
const Speaker = require ('speaker');
const Stream = require ('stream');

// Create an Polly client
const Polly = new AWS.Polly({
	signatureVersion: 'v4',
	region: 'us-east-1',
	profile: 'mariatechfuture'
});

// Create the Speaker instance
const Player = new Speaker({
	channels: 1,
	bitDepth: 16,
	sampleRate: 16000
  });
  

  
 synthesizeSpeech = async(text) => {
    console.log("in systhsesze sppech")

    let params = {
        'Text': text,
        'OutputFormat': 'pcm',
        'VoiceId': 'Ivy',
        'Engine' :'neural'
    };

  Polly.synthesizeSpeech(params, (err, data) => {
        if (err) {
            console.log(err.code)
        } else if (data) {
            if (data.AudioStream instanceof Buffer) {
                // Initiate the source
                var bufferStream = new Stream.PassThrough()
                // convert AudioStream into a readable stream
                bufferStream.end(data.AudioStream)
                // Pipe into Player
                bufferStream.pipe(new Speaker({
                    channels: 1,
                    bitDepth: 16,
                    sampleRate: 16000
                }))

            
       
            }
        }
       
    })
}

module.exports = {
    synthesizeSpeech
}
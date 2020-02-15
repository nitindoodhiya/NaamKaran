import sys, json, numpy as np
import json
from youtube_transcript_api import YouTubeTranscriptApi
#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    #Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    lines = read_in()
    j=''

    x = YouTubeTranscriptApi.get_transcript(lines)
    for i in x:
        j = j+str(i["text"])+' '
    
    print j

#start process
if __name__ == '__main__':
    main()
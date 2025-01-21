+++
weight = 60
title = "Create Video" 
+++ 

# Create Video
*A guide for post-production of YCM event recordings*

## Initial Organization

1. **Create Working Directory**
   - Open the event folder in Google Drive
   - Create a new "Media" folder
   - Create subfolders:
     - Raw Audio
     - Raw Video
     - Edited Files
     - Final Output

2. **Gather Recording Files**
   - Transfer audio files from recording device
   - Transfer video files from camera
   - Place in respective Raw folders

## Audio Editing in Logic Pro

1. **Project Setup**
   - Open Logic Pro
   - Create new project
   - Set sample rate to 48kHz (important for later sync)

2. **Import and Basic Editing**
   - Import raw audio files
   - Create basic track organization
   - Check levels across all tracks

3. **Audio Enhancement**
   - Adjust audience applause:
     - Identify applause sections
     - Reduce volume to maintain focus on music
     - Ensure natural fade in/out
   
   - Room acoustics (if needed):
     - Add subtle reverb for dry spaces
     - Recommended for venues like San Mateo Public Library
   
   - Piano balance (if applicable):
     - Import piano microphone track
     - Adjust levels for proper blend
     - Check phase alignment

4. **Export**
   - Select "Export as Audio File"
   - Choose settings:
     - Format: WAV or other PCM
     - Sample Rate: 48kHz (crucial)
     - Bit Depth: 24-bit
   - Save to Edited Files folder

## Video Editing in DaVinci Resolve

1. **Project Creation**
   - Launch DaVinci Resolve
   - Create new project
   - Set project settings to match audio (48kHz)

2. **Media Import**
   - Import edited audio file
   - Import raw video file
   - Organize in media pool

3. **For Split Videos**
   - Prepare text file following [video_info.txt](./video_info.txt) format
   - Use [video_cut.sh](./video_cut.sh) script:
     ```bash
     ./video_cut.sh input_video.mp4 video_info.txt
     ```

4. **Audio-Video Synchronization**
   - Place video on timeline
   - Add edited audio below video
   - Align using visual cues:
     - Instrument movements
     - Conductor gestures
     - Performance starts/stops

5. **Handling Long Videos**
   
   For 30+ Minute Videos:
   - Split into smaller segments
   - Sync each segment separately
   - Join segments carefully

   For Continuous Recordings:
   - If drift occurs, use FFmpeg correction:
     ```bash
     ffmpeg -i input.mp4 -c:v copy -c:a aac -af atempo=.9999 output.mp4
     ```

6. **Export Settings**
   - Set appropriate resolution (1080p typical)
   - Use high-quality codec (H.264 recommended)
   - Maintain 48kHz audio
   - Add to render queue

## Distribution Process

### For Masterclasses

1. **Upload to Google Drive**
   - Place in event's Media folder
   - Set sharing permissions:
     - Share with students@youngchambermusicians.org
     - Share with coaches@youngchambermusicians.org
   - Save sharing URL for follow-up

### For Concerts

1. **YouTube Upload**
   - Access YCM YouTube channel
   - Create video details:
     - Title following existing format
     - Description matching previous videos
     - Appropriate tags
   - Set visibility (usually public)
   - Add to relevant playlists

## Final Archive

1. **Organize Final Files**
   - Place all final versions in Media folder
   - Include:
     - Final edited audio
     - Final video files
     - YouTube links (if applicable)
     - Share URLs

2. **Documentation**
   - Note any special processing used
   - Record any technical issues
   - Document sharing permissions

3. **Backup**
   - Verify all files are synced to Google Drive
   - Confirm successful uploads
   - Check all sharing permissions

Remember: Maintaining consistent file organization and careful attention to technical details will save time in future productions and ensure high-quality results.
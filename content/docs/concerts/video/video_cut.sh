#!/opt/homebrew/bin/fish

while read video_info
    set -l v (string split "," "$video_info")
    ffmpeg -ss "$v[2]" -i concert-full.mov -to "$v[3]" -c:v libx264 -preset slow -crf 18 -c:a aac -b:a 192k -pix_fmt yuv420p "$v[1].mkv" < /dev/null
end < video_info.txt

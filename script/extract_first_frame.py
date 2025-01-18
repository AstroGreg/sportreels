#!/usr/bin/env python3

import cv2
import requests
import os

VIDEO_URL = "https://awssportreels.s3.eu-central-1.amazonaws.com/PK-800m.mp4"
TEMP_FILENAME = "temp_video.mp4"

# A list of desired widths for different device sizes. 
# Adjust these to match your own breakpoints or aspect ratios.
DESIRED_WIDTHS = [240, 480, 720, 1080]

def download_video(url, filename):
    print(f"Downloading video from: {url}")
    with requests.get(url, stream=True) as r:
        r.raise_for_status()
        with open(filename, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                if chunk:
                    f.write(chunk)
    print(f"Video saved as {filename}")

def extract_first_frame(video_file):
    # Open the video with OpenCV
    cap = cv2.VideoCapture(video_file)
    ret, frame = cap.read()
    cap.release()

    if not ret:
        raise ValueError("Failed to read the first frame from the video.")

    return frame

def save_resized_versions(frame, widths):
    """Given a frame (NumPy array) and a list of widths, 
       saves multiple JPEGs with the same aspect ratio but different widths.
    """
    original_height, original_width = frame.shape[:2]

    for w in widths:
        scale_factor = w / original_width
        resized_height = int(original_height * scale_factor)

        resized_frame = cv2.resize(frame, (w, resized_height), interpolation=cv2.INTER_AREA)
        output_file = f"first_frame_{w}px.jpg"
        cv2.imwrite(output_file, resized_frame)
        print(f"Saved {output_file} (width={w}, height={resized_height})")

def main():
    # 1) Download the video
    download_video(VIDEO_URL, TEMP_FILENAME)

    # 2) Extract the first frame as a NumPy array
    frame = extract_first_frame(TEMP_FILENAME)

    # 3) Generate multiple sized JPEGs
    save_resized_versions(frame, DESIRED_WIDTHS)

    # 4) Clean up the temp video file (optional)
    if os.path.exists(TEMP_FILENAME):
        os.remove(TEMP_FILENAME)
        print(f"Removed temporary file: {TEMP_FILENAME}")

if __name__ == "__main__":
    main()


Some quick notes working with https://github.com/voicepaw/so-vits-svc-fork
1. audio fidelity matters. Speech is ok and result is better than audio especially if you can get more data. But it can't do higher pitch as well because in speech it occurs less often
2. Vocal extractor removing background noise works surprisingly well as a model.
3. Repo is fairly nice to work with. Just need to set up the right directory structure.
4. Did some twitch vod extraction. Used ffmpeg magic to download twitch vod and extracted the audio.
5. When doing inference, it's good to extract vocal and background then inference on vocal and then stich the video streams back together
6. Sounds quite realistic in terms of the voice. Quite happy with the result and the fact that I tried it out.

## Summary

### For Mac book Inter i5, ram 16gb

#### Steps to run IdM-VTON - Run the below commands one by one

- git clone https://github.com/yisol/IDM-VTON.git
- cd IDM-VTON

iDM-VTON usines pytorch which is compatible with python 3.10 version
- brew install python@3.10
- /usr/local/bin/python3.10 --version 

- /usr/local/bin/python3.10 -m venv venv

Now activate the environment
- source venv/bin/activate
```
You should see the below output
(venv) yourname@MacBookPro IDM-VTON %
```
- pip install --upgrade pip setuptools wheel

- pip install \
accelerate==0.25.0 \
torchmetrics==1.2.1 \
tqdm==4.66.1 \
transformers==4.36.2 \
diffusers==0.25.0 \
einops==0.7.0 \
scipy==1.11.1 \
opencv-python \
gradio==4.24.0 \
fvcore \
cloudpickle \
omegaconf \
pycocotools \
basicsr \
av \
onnxruntime==1.16.2

- pip install pydantic==2.8.2 pydantic-core==2.20.1 fastapi==0.112.4

#### Now we need to download the model weights
- mkdir yisol
- cd yisol
- git clone https://huggingface.co/yisol/IDM-VTON
- git lfs install
- git lfs pull


#### Step 8: Launch the gradio UI
- venv/bin/activate
- python gradio_demo/app.pyx





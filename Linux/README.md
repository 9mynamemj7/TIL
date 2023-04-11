# LINUX

### ubuntu에 python 설치

#### PPA 패키지

```powershell
# add-apt-repository 설치
sudo apt update
sudo apt install software-properties-common

# ppa 저장소 추가
sudo add-apt-repository ppa:deadsnakes/ppa

# 파이썬 설치
sudo apt install python3.9
alias py=python3.9

FROM continuumio/miniconda:latest

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update && apt-get upgrade -y && apt-get install -qqy \
        wget \
        bzip2 \
        graphviz

RUN echo 'export PATH=/opt/miniconda/bin:$PATH' > /etc/profile.d/conda.sh && \
    wget --quiet https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda.sh && \
    /bin/bash ~/miniconda.sh -b -p /opt/miniconda && \
    rm ~/miniconda.sh

RUN curl -sL https://deb.nodesource.com/setup_13.x | bash - && apt-get install -y nodejs && apt-get install -y npm

RUN mkdir -p /backend

COPY ./backend/requirements.yml /backend/requirements.yml

RUN /opt/conda/bin/conda env create -f /backend/requirements.yml
ENV PATH /opt/conda/envs/MFS/bin:$PATH

RUN echo "source activate MFS" >~/.bashrc

RUN mkdir -p /scripts
COPY ./scripts /scripts
RUN chmod +x ./scripts*

COPY ./backend /backend

RUN mkdir -p /frontend
RUN mkdir -p /frontend_tmp
COPY ./frontend /frontend_tmp
WORKDIR frontend_tmp
RUN npm i
RUN npm run build

WORKDIR /backend

FROM continuumio/miniconda3:latest

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update && apt-get upgrade -y && apt-get install -qqy \
        wget \
        bzip2 \
        graphviz

<<<<<<< HEAD
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && apt-get install -y nodejs && apt-get install -y npm
=======
RUN curl -sL https://deb.nodesource.com/setup_13.x | bash - && apt-get install -y nodejs && apt-get install -y npm
>>>>>>> dusko

RUN mkdir -p /backend

COPY ./backend/requirements.yml /backend/requirements.yml

RUN /opt/conda/bin/conda env create -f /backend/requirements.yml
ENV PATH /opt/conda/envs/MFS/bin:$PATH

RUN echo "source activate MFS" >~/.bashrc

COPY ./backend /backend

RUN mkdir -p /scripts
COPY ./scripts /scripts
RUN chmod +x ./scripts*

RUN mkdir -p /frontend
RUN mkdir -p /frontend_tmp
COPY ./frontend /frontend_tmp
WORKDIR frontend_tmp
RUN npm i
RUN npm run build

WORKDIR /backend

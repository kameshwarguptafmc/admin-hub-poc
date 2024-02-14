FROM node:18.19-alpine3.18

WORKDIR /usr/src/app

COPY package.json .

COPY sshd_config /etc/ssh/
COPY entrypoint.sh ./

# Start and enable SSH
RUN apk add openssh \
    && echo "root:Docker!" | chpasswd \
    && chmod +x ./entrypoint.sh \
    && cd /etc/ssh/ \
    && ssh-keygen -A

RUN yarn install

COPY . ./

ARG ROOT_DOMAIN
ENV ROOT_DOMAIN ${ROOT_DOMAIN}

RUN yarn next build

EXPOSE 3000 2222

RUN chmod +x /usr/src/app/entrypoint.sh

ENTRYPOINT [ "/usr/src/app/entrypoint.sh" ]

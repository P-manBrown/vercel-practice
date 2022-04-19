FROM node:16.14.2

ENV APP_NAME=myapp
ENV USER_NAME=myuser
ENV TZ=Asia/Tokyo

WORKDIR /${APP_NAME}

RUN adduser ${USER_NAME} && \
  chown -R ${USER_NAME} /${APP_NAME}
USER ${USER_NAME}

EXPOSE 3000
CMD ["npm", "run", "dev"]



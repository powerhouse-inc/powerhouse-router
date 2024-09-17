FROM nginx:alpine

# deleting the limited (no extra modules) nginx 1.26.x installation
RUN apk del -r nginx

# installing the alpine os native nginx 1.24.0 with the extra modules we need
RUN apk add --no-cache \
  nginx \
  nginx-mod-http-vts \
  nginx-mod-http-brotli \
  nginx-mod-http-cache-purge \
  nginx-mod-http-headers-more \
  envsubst 
ENV PORT=80

ENV POWERHOUSE_SWITCHBOARD=https://ph-switchboard-nginx-prod-c84ebf8c6e3b.herokuapp.com
ENV ARBITRUM_SWITCHBOARD=https://switchboard-arbitrum-nginx-dcd0a953206a.herokuapp.com
ENV MAKERDAO_SWITCHBOARD=https://makerdao-sb-nginx-prod-a7bc516d7f06.herokuapp.com

ENV POWERHOUSE_SWITCHBOARD_STAGING=https://ph-switchboard-nginx-staging-19583bf7897a.herokuapp.com
ENV ARBITRUM_SWITCHBOARD_STAGING=https://switchboard-arbitrum-ng-alpha-58b7421c3732.herokuapp.com
ENV MAKERDAO_SWITCHBOARD_STAGING=https://makerdao-sb-nginx-alpha-e20d6399dcfa.herokuapp.com

ENV POWERHOUSE_CONNECT=https://ph-connect-prod-e93926b90614.herokuapp.com
ENV ARBITRUM_CONNECT=https://arbitrum-connect-prod-d425b844fe1c.herokuapp.com
ENV MAKERDAO_CONNECT=https://makerdao-connect-prod-3e5baf24ce5d.herokuapp.com

ENV POWERHOUSE_CONNECT_STAGING=https://ph-connect-staging-8fd06680250e.herokuapp.com
ENV ARBITRUM_CONNECT_STAGING=https://arbitrum-connect-alpha-b61a90d4196d.herokuapp.com
ENV MAKERDAO_CONNECT_STAGING=https://makerdao-connect-alpha-d490586133d4.herokuapp.com
ENV POWERHOUSE_CONNECT_DEVELOP=https://connect-develop-980033762b6b.herokuapp.com
ENV POWERHOUSE_SWITCHBOARD_DEVELOP=https://switchboard-develop-7728381239bd.herokuapp.com

ENV RENOWN=https://renown.vercel.app
ENV RENOWN_STAGING=https://renown.vercel.app

ENV FRONTPAGE=https://powerhouse-router-frontend-0973598a3aa6.herokuapp.com

ENV PH_WEBSOCKETS_SWITCHBOARD=https://switchboard-websockets-67bbee53f604.herokuapp.com/
ENV PH_WEBSOCKETS_CONNECT=https://connect-websockets-e5404ccfe6a2.herokuapp.com/

COPY nginx.conf /etc/nginx/conf.d/default.conf.template
CMD /bin/sh -c "envsubst '\$PORT,\$POWERHOUSE_SWITCHBOARD,\$MAKERDAO_SWITCHBOARD,\$ARBITRUM_SWITCHBOARD,\$POWERHOUSE_SWITCHBOARD_STAGING,\$MAKERDAO_SWITCHBOARD_STAGING,\$ARBITRUM_SWITCHBOARD_STAGING,\$POWERHOUSE_CONNECT,\$MAKERDAO_CONNECT,\$ARBITRUM_CONNECT,\$POWERHOUSE_CONNECT_STAGING,\$MAKERDAO_CONNECT_STAGING,\$ARBITRUM_CONNECT_STAGING,\$RENOWN,\$RENOWN_STAGING,\$FRONTPAGE,\$POWERHOUSE_ CONNECT_DEVELOP,\$POWERHOUSE_SWITCHBOARD_DEVELOP,\$PH_WEBSOCKETS_SWITCHBOARD,\$PH_WEBSOCKETS_CONNECT,\$POWERHOUSE_CONNECT_DEVELOP' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/nginx.conf" && nginx -g 'daemon off;'


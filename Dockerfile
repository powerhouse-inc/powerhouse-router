FROM nginx:stable
ENV PORT=80

ENV POWERHOUSE_SWITCHBOARD=https://ph-switchboard-nginx-prod-c84ebf8c6e3b.herokuapp.com
ENV ARBITRUM_SWITCHBOARD=https://switchboard-arbitrum-nginx-dcd0a953206a.herokuapp.com
ENV MAKERDAO_SWITCHBOARD=https://makerdao-sb-nginx-prod-a7bc516d7f06.herokuapp.com

ENV POWERHOUSE_SWITCHBOARD_STAGING=https://ph-switchboard-nginx-staging-19583bf7897a.herokuapp.com
ENV ARBITRUM_SWITCHBOARD_STAGING=https://switchboard-arbitrum-ng-alpha-58b7421c3732.herokuapp.com
ENV MAKERDAO_SWITCHBOARD_STAGING=https://makerdao-sb-nginx-alpha-e20d6399dcfa.herokuapp.com

ENV POWERHOUSE_CONNECT=https://powerhouse-connect.vercel.app
ENV ARBITRUM_CONNECT=https://connect-arbitrum.vercel.app
ENV MAKERDAO_CONNECT=https://powerhouse-connect.vercel.app

ENV POWERHOUSE_CONNECT_STAGING=https://powerhouse-connect.vercel.app
ENV ARBITRUM_CONNECT_STAGING=https://connect-arbitrum.vercel.app
ENV MAKERDAO_CONNECT_STAGING=https://powerhouse-connect.vercel.app

ENV RENOWN=https://renown-frontend.herokuapp.com
ENV RENOWN_STAGING=https://renown-frontend.herokuapp.com

COPY nginx.conf /etc/nginx/conf.d/default.conf.template
CMD /bin/sh -c "envsubst '\$PORT,\$POWERHOUSE_SWITCHBOARD,\$MAKERDAO_SWITCHBOARD,\$ARBITRUM_SWITCHBOARD,\$POWERHOUSE_SWITCHBOARD_STAGING,\$MAKERDAO_SWITCHBOARD_STAGING,\$ARBITRUM_SWITCHBOARD_STAGING,\$POWERHOUSE_CONNECT,\$MAKERDAO_CONNECT,\$ARBITRUM_CONNECT,\$POWERHOUSE_CONNECT_STAGING,\$MAKERDAO_CONNECT_STAGING,\$ARBITRUM_CONNECT_STAGING,\$RENOWN,\$RENOWN_STAGING' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'


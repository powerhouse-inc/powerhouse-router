FROM nginx:stable
ENV PORT=80

ENV MAKERDAO_SWITCHBOARD=https://ph-switchboard-nginx-prod-c84ebf8c6e3b.herokuapp.com
ENV ARBITRUM_SWITCHBOARD=https://switchboard-arbitrum-nginx-dcd0a953206a.herokuapp.com


COPY nginx.conf /etc/nginx/conf.d/default.conf.template
CMD /bin/sh -c "envsubst '\$PORT,\$MAKERDAO_SWITCHBOARD,\$ARBITRUM_SWITCHBOARD' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'


# GitHub Actions Deployment Guide

Bu klasör, projenin Cloudflare üzerinde otomatik olarak yayınlanması için gerekli GitHub Actions workflow dosyalarını içerir.

## Gerekli Secrets

GitHub repository'nizde şu secrets'ları eklemeniz gerekiyor:

### Cloudflare Pages için:
- `CLOUDFLARE_API_TOKEN`: Cloudflare API Token'ınız
- `CLOUDFLARE_ACCOUNT_ID`: Cloudflare Account ID'niz
- `CLOUDFLARE_PROJECT_NAME`: Cloudflare Pages proje adınız

### Cloudflare Workers için:
- `CLOUDFLARE_API_TOKEN`: Cloudflare API Token'ınız
- `CLOUDFLARE_ACCOUNT_ID`: Cloudflare Account ID'niz

## Cloudflare API Token Nasıl Alınır?

1. [Cloudflare Dashboard](https://dash.cloudflare.com)'a giriş yapın
2. Sağ üst köşedeki profil ikonuna tıklayın ve "My Profile"ı seçin
3. Sol menüden "API Tokens"a tıklayın
4. "Create Token" butonuna tıklayın
5. "Edit Cloudflare Workers" template'ini seçin (Pages için de aynı token kullanılabilir)
6. İzinleri gerektiği gibi yapılandırın ve token'ı oluşturun
7. Token'ı kopyalayın ve GitHub repository secrets olarak kaydedin

## Account ID'nizi Nasıl Bulursunuz?

1. [Cloudflare Dashboard](https://dash.cloudflare.com)'a giriş yapın
2. Herhangi bir sitenize tıklayın
3. Sağ sidebar'da "API" bölümünün altında "Account ID" bilgisini bulabilirsiniz

## Kullanım

Bu repository'de iki workflow dosyası bulunmaktadır:

- `deploy.yml`: Cloudflare Pages için deployment
- `deploy-workers.yml`: Cloudflare Workers için deployment

İhtiyacınıza göre birini seçip diğerini silebilirsiniz veya ikisini de aktif tutabilirsiniz. 
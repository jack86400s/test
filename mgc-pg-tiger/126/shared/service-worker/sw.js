const CACHE_NAME = 'cache-v1';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  // ʹ�� network-only ����
  event.respondWith(
    fetch(event.request, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache'
      }
    }).catch(() => {
      // �����������ʧ�ܣ����Է���һ��Ĭ�ϵ���Ӧ�����ҳ��
      return Response.error();
    })
  );
});
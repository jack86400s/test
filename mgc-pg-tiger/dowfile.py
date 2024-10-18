#!/usr/bin/python
# -*- coding: UTF-8 -*-

import os, re, random
import urllib.request, urllib.parse

opener = urllib.request.build_opener()
# 构建请求头列表每次随机选择一个
ua_list = ['Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0',
           'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
           'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36 Edg/103.0.1264.62',
           'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0',
           'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.81 Safari/537.36 SE 2.X MetaSr 1.0'
           ]
opener.addheaders = [('User-Agent', random.choice(ua_list))]
urllib.request.install_opener(opener)

baseurl = 'https://static.pgf-asqb7a.com'
lists = [
'http://localhost:8081/mgc-pg-tiger/126/f1461ec48f.7ce0e.png',
'http://localhost:8081/mgc-pg-tiger/126/3c9e28a643.a218d.png',
'http://localhost:8081/mgc-pg-tiger/126/7d551c0003.dd294.png',
'http://localhost:8081/mgc-pg-tiger/126/220c61bb66.6f26b.png',
'http://localhost:8081/mgc-pg-tiger/126/919f1cdf1e.d12f8.json',
'',
'',
'',
'',
]

def hpath(url1):
    url = url1.replace('http://localhost:8081/mgc-pg-tiger', "")
    burl = baseurl
    if 'shared' in url1:
        url = url1.replace('http://localhost:8081/mgc-pg-tiger/123', "")

    parsed = urllib.parse.urlparse(url)
    filename = os.path.basename(parsed.path)
    filepath = os.path.dirname(parsed.path)

    basepath = os.getcwd() + '' + filepath
    if 'shared' in url1:
         basepath = os.getcwd() + '/126/' +  filepath

    if not os.path.exists(basepath):
        os.makedirs(basepath)

    dowurl = burl + filepath + '/' +  filename

    print('hpath dowurl: {}'.format(dowurl))
    dowpath = basepath + '/' + filename

    print('hpath url: {}'.format(url))
    print('hpath dowpath: {}'.format(dowpath))
    if not os.path.exists(filepath):
        try:
            urllib.request.urlretrieve(dowurl, dowpath)
        except Exception as e:
            print("Error occurred when downloading file, error message:")
            print(e)
    print('---')

def run():
    for url in lists:
        if url != '':
            hpath(url)

run()

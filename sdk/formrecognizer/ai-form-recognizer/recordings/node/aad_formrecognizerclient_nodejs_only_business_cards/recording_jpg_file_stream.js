let nock = require('nock');

module.exports.hash = "e7ba885af99b2b7d9798f6275a212283";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fcognitiveservices.azure.com%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '7dac2a8a-45d2-46a1-96fb-93844c5a2200',
  'x-ms-ests-server',
  '2.1.11251.20 - NCUS ProdSlices',
  'Set-Cookie',
  'fpc=AvrTSAfVu95Ju96XEAVtfg4; expires=Sun, 20-Dec-2020 21:50:55 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 20 Nov 2020 21:50:55 GMT',
  'Content-Length',
  '1331'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .reply(202, "", [
  'Content-Length',
  '0',
  'Operation-Location',
  'https://endpoint/formrecognizer/v2.1-preview.2/prebuilt/businessCard/analyzeResults/f835a2b9-5660-420e-a011-4ce688097908',
  'x-envoy-upstream-service-time',
  '652',
  'apim-request-id',
  'f835a2b9-5660-420e-a011-4ce688097908',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Fri, 20 Nov 2020 21:50:56 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.2/prebuilt/businessCard/analyzeResults/f835a2b9-5660-420e-a011-4ce688097908')
  .reply(200, {"status":"running","createdDateTime":"2020-11-20T21:50:56Z","lastUpdatedDateTime":"2020-11-20T21:50:57Z"}, [
  'Content-Length',
  '106',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '15',
  'apim-request-id',
  '8d5b5074-64a7-446b-95f2-0abf6406ef6f',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Fri, 20 Nov 2020 21:50:56 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.2/prebuilt/businessCard/analyzeResults/f835a2b9-5660-420e-a011-4ce688097908')
  .reply(200, {"status":"running","createdDateTime":"2020-11-20T21:50:56Z","lastUpdatedDateTime":"2020-11-20T21:50:57Z"}, [
  'Content-Length',
  '106',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '42',
  'apim-request-id',
  '73076a2b-9578-448d-a6c6-c49fd18b310f',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Fri, 20 Nov 2020 21:50:56 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.2/prebuilt/businessCard/analyzeResults/f835a2b9-5660-420e-a011-4ce688097908')
  .reply(200, {"status":"succeeded","createdDateTime":"2020-11-20T21:50:56Z","lastUpdatedDateTime":"2020-11-20T21:50:58Z","analyzeResult":{"version":"2.1.0","readResults":[{"page":1,"angle":-16.6836,"width":4032,"height":3024,"unit":"pixel"}],"documentResults":[{"docType":"prebuilt:businesscard","pageRange":[1,1],"fields":{"ContactNames":{"type":"array","valueArray":[{"type":"object","valueObject":{"FirstName":{"type":"string","valueString":"Avery","text":"Avery","boundingBox":[683,1098,1158,984,1187,1103,712,1212],"page":1},"LastName":{"type":"string","valueString":"Smith","text":"Smith","boundingBox":[1179,979,1610,871,1637,990,1209,1097],"page":1}},"text":"Dr. Avery Smith","boundingBox":[413.8,1151.8,1610,871,1639.5,996.8,443.4,1277.6],"page":1,"confidence":0.979}]},"JobTitles":{"type":"array","valueArray":[{"type":"string","valueString":"Senior Researcher","text":"Senior Researcher","boundingBox":[446.8,1312.2,1318,1103,1336.7,1180.9,465.5,1390.1],"page":1,"confidence":0.99}]},"Departments":{"type":"array","valueArray":[{"type":"string","valueString":"Cloud & Al Department","text":"Cloud & Al Department","boundingBox":[473.1,1407.2,1594,1132,1615.4,1219.3,494.5,1494.5],"page":1,"confidence":0.989}]},"Emails":{"type":"array","valueArray":[{"type":"string","valueString":"avery.smith@contoso.com","text":"avery.smith@contoso.com","boundingBox":[2103,935,2926,701,2938,764,2119,994],"page":1,"confidence":0.99}]},"Websites":{"type":"array","valueArray":[{"type":"string","valueString":"https://www.contoso.com/","text":"https://www.contoso.com/","boundingBox":[2116,1004,2981,757,3006,824,2136,1075],"page":1,"confidence":0.99}]},"MobilePhones":{"type":"array","valueArray":[{"type":"phoneNumber","text":"+44 (0) 7911 123456","boundingBox":[2431.9,1037.2,3081.2,843.3,3102.7,915.2,2453.3,1109.1],"page":1,"confidence":0.99}]},"OtherPhones":{"type":"array","valueArray":[{"type":"phoneNumber","text":"+44 (0) 20 9876 5432","boundingBox":[2469.1,1118.1,3136.2,912.4,3158.8,985.8,2491.8,1191.5],"page":1,"confidence":0.99}]},"Faxes":{"type":"array","valueArray":[{"type":"phoneNumber","text":"+44 (0) 20 6789 2345","boundingBox":[2521.3,1196.2,3198,979,3222.3,1054.7,2545.6,1271.9],"page":1,"confidence":0.99}]},"CompanyNames":{"type":"array","valueArray":[{"type":"string","valueString":"Contoso","text":"Contoso","boundingBox":[1157,1923,2299,1565,2361,1731,1213,2098],"page":1,"confidence":0.222}]},"Addresses":{"type":"array","valueArray":[{"type":"string","valueString":"2 Kingdom Street Paddington, London, W2 6BD","text":"2 Kingdom Street Paddington, London, W2 6BD","boundingBox":[1224.6,2139.5,2536.4,1685.2,2613.1,1906.7,1301.3,2361],"page":1,"confidence":0.979}]}}}]}}, [
  'Content-Length',
  '2683',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '15',
  'apim-request-id',
  '8aac50df-9e16-4c7f-8137-7436e9b805ed',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Fri, 20 Nov 2020 21:51:01 GMT'
]);
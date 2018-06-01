// 增加被告 request
var filterMap = {
  "securityCaseId": "vqQtVYVBRp48x7mH2vzUJA",
  "province": "",
  "city": "410900",
  "district": "410923",
  "fileCardFront": "",
  "fileCradBack": "",
  "lassenSuitEntityDo": {
    "securityId": "4Yx_zVN9373NDdQJw3rHDg",
    "entityRole": "accused",
    "entityType": "normal",
    "name": "参合",
    "gender": "male",
    "nation": "汉族",
    "birthday": "2018-05-28",
    "curAddress": "看看",
    "curAddressAdcode": "410923",
    "certType": "idcard",
    "email": "",
    "phone": "",
    "companyName": ""
  }
}
var res1 = {
  "content": {
    "isSuccess": true,
    "retValue": {
      "frontDoList": [],
      "backDoList": [],
      "name": "参合",
      "caseId": 22111556667846,
      "entityType": "normal",
      "mobile": "*******5527",
      "entityStatus": "valid",
      "entityRole": "accused",
      "idCard": "3****************5",
      "birthday": 1527436800000,
      "gender": "male",
      "curAddress": "看看",
      "baseCaseId": 10017995,
      "baseEntityId": 10835962,
      "boQualifiedIntfName": "com.alibaba.lassen.suit.bo.LassenSuitEntityBo",
      "isAli": "n",
      "certType": "idcard",
      "nation": "汉族",
      "entityPosition": 1,
      "curAddressAdcode": "410923",
      "securityId": "4Yx_zVN9373NDdQJw3rHDg",
      "gmtCreate": 1527820244000,
      "gmtModified": 1527820261000,
      "isDeleted": "n",
      "creator": "111142",
      "modifier": "111142"
    }
  }, "hasError": false
}

// 增加证据 request
var suitEvidenceDTo = {
  //
  "securityId": "",
  "autoSave": "n",
  "submitPhase": "will_submit",
  "name": "证据",
  "pageNum": "",
  "content": "内容",
  "source": "来源",
  "attachments": "_OI4r-XBnbmfvfp3Mt5d9A",
  "UploadFileInput": "_OI4r-XBnbmfvfp3Mt5d9A",
  "securityCaseId": "vqQtVYVBRp48x7mH2vzUJA",
  "basisIds": "",
  "securityRefId": "",
  "status": "",
  "caseType": "copyright_infringement"
}
var res2 = {
  "content": {
    "isSuccess": true,
    "retValue": {
      "uploadFileDos": [{
        "securityBusinessId": "kDj\/lmwrEZtL7NuBQLQMRA==",
        "fileName": "Desert.jpg",
        "url": "\/fileOperation\/downloadVesuv.json?fileIdStr=_OI4r-XBnbmfvfp3Mt5d9A",
        "businessType": "LASSEN_SUIT_EVIDENCE",
        "resourceId": "bab3b6ee-e221-4c89-bc6e-a62d7d8c97e0",
        "boQualifiedIntfName": "com.alibaba.lassen.dal.commonservice.LassenUploadFileBo",
        "storageType": "OSS",
        "securityId": "_OI4r-XBnbmfvfp3Mt5d9A"
      }],
      "securityCaseId": "vqQtVYVBRp48x7mH2vzUJA==",
      "name": "证据",
      "content": "内容",
      "source": "来源",
      "attachments": "_OI4r-XBnbmfvfp3Mt5d9A",
      "isAutoGen": false,
      "submitPhase": "will_submit",
      "boQualifiedIntfName": "com.alibaba.lassen.suit.bo.SuitEvidenceBo",
      "autoSave": "n",
      "securityId": "kDj_lmwrEZtL7NuBQLQMRA",
      "gmtCreate": 1527820738000
    }
  }, "hasError": false
}

// 提交诉讼状
var legalCaseRequesBasisVo = {
  "securityCaseId": "vqQtVYVBRp48x7mH2vzUJA",
  "securityId": "vqQtVYVBRp48x7mH2vzUJA",
  "basisIds": "lT1kv1HNatBNbtnzq6n8ww",
  "securityRefId": "",
  "autoSave": "y",
  "status": "",
  "caseType": "copyright_infringement",
  "causeAction": "侵害作品发表权纠纷",
  "courtId": "2",
  "selectReason": "test_court",
  "fact": "事实10元",
  "basisContent-shadow": "<h2><strong>主题详情</strong></h2><p>坚持生命的永恒</p><p>感受风的速度在耳边呼啸远方</p>",
  "basisContent": "<h2><strong>主题详情</strong></h2><p>坚持生命的永恒</p><p>感受风的速度在耳边呼啸远方</p>",
  "lassenSuitRequestDoList": [{"requestType": "refund_ten", "content": "请求内容5元", "amount": "5"}]
}

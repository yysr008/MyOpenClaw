# HEARTBEAT.md - 定期任务执行文件

## 任务配置
- **检查频率**: 每分钟一次
- **主调度脚本**: master_scheduler.js

## 执行任务
1. 运行 `node master_scheduler.js` 根据时间调度其他任务
   - 财经汇报：每天 UTC 时间 00:00, 06:00, 12:00, 18:00
   - 天气汇报：每小时整点和半点（东八区时间）
   - 请安消息：每小时整点和半点（东八区时间）

## 注意事项
- 确保所有脚本在正确路径下
- 检查 Node.js 环境是否正常
- 脚本需要网络连接以获取天气和财经数据

## 脚本依赖
- master_scheduler.js (主调度器)
- financial_report.js (财经数据)
- weather_report.js (深圳天气)
- checkin.js (问候消息)

## 上次执行
- HTTP()或空

## 下次检查
- 每分钟自动检查并执行

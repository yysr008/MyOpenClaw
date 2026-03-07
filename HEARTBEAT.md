# HEARTBEAT.md - 定期任务

## 任务配置
- **汇报频率**: 每 6 小时一次
- **执行任务**:
  1. 运行 `node financial_report.js` 抓取全球财经数据
  2. 生成投资建议报告（需包含理由、具体建议、风险等级）
  3. 通过 Telegram 向 Dominus主人 汇报

## 天气汇报配置
- **汇报频率**: 每小时整点和半点一次
- **执行任务**:
  1. 使用 weather 工具查询深圳天气
  2. 通过 Telegram 向 Dominus主人 汇报

## 检查清单
-

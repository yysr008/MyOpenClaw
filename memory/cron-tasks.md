# 定时任务记录

## 深圳天气汇报

- **任务 ID:** `08481225-c9e6-4606-b1f0-81c437374412`
- **名称:** 深圳天气汇报
- **描述:** 每30分钟汇报深圳天气
- **频率:** 每 30 分钟
- **时区:** Asia/Shanghai (东八区)
- **状态:** ✅ 已启用
- **下次运行:** 30 分钟后
- **交付方式:** Telegram 私信

---

## 管理命令

```bash
# 查看任务列表
openclaw cron list

# 查看任务状态
openclaw cron status

# 手动运行一次（测试用）
openclaw cron run "深圳天气汇报"

# 禁用任务
openclaw cron disable "深圳天气汇报"

# 启用任务
openclaw cron enable "深圳天气汇报"

# 删除任务
openclaw cron rm "深圳天气汇报"
```

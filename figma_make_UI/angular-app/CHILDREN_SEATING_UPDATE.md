# Cập Nhật Hệ Thống Đặt Chỗ Ngồi Cho Trẻ Em

## 📋 Vấn Đề
Hệ thống cũ chưa phân biệt rõ ràng giữa trẻ em cần ghế riêng và trẻ em không cần ghế (ngồi cùng bố mẹ), gây khó khăn trong việc tính toán số ghế cần thiết.

## ✅ Giải Pháp

### 1. Phân Loại Rõ Ràng

Hệ thống mới phân chia thành **3 nhóm**:

```
👤 NGƯỜI LỚN
   - Luôn cần ghế riêng
   - Tính vào số ghế cần

👶 TRẺ EM NHỎ (Dưới 5 tuổi)
   - KHÔNG cần ghế riêng
   - Ngồi cùng bố mẹ
   - Tính vào tổng số người
   - KHÔNG tính vào số ghế cần

🧒 TRẺ EM LỚN (Từ 5-12 tuổi)
   - Cần ghế riêng
   - Tính vào tổng số người
   - Tính vào số ghế cần
```

### 2. Công Thức Tính

```typescript
// TỔNG SỐ NGƯỜI = Tất cả mọi người
totalGuests = người lớn + trẻ em nhỏ + trẻ em lớn

// SỐ GHẾ CẦN = Chỉ những người cần ghế riêng
seatsNeeded = người lớn + trẻ em lớn
```

### 3. Ví Dụ Thực Tế

#### Ví dụ 1: Gia đình có trẻ nhỏ
```
👤 2 người lớn
👶 1 trẻ 3 tuổi (ngồi cùng mẹ)

→ Tổng: 3 người
→ Ghế cần: 2 ghế
→ Đề xuất: Bàn 2 chỗ
```

#### Ví dụ 2: Gia đình có trẻ lớn
```
👤 2 người lớn
🧒 2 trẻ 7 và 9 tuổi (cần ghế riêng)

→ Tổng: 4 người
→ Ghế cần: 4 ghế
→ Đề xuất: Bàn 4 chỗ
```

#### Ví dụ 3: Gia đình đông
```
👤 2 người lớn
👶 1 trẻ 2 tuổi (không cần ghế)
🧒 2 trẻ 6 và 10 tuổi (cần ghế)

→ Tổng: 5 người
→ Ghế cần: 4 ghế (2 người lớn + 2 trẻ lớn)
→ Đề xuất: Bàn 4 chỗ
```

#### Ví dụ 4: Nhóm lớn
```
👤 6 người lớn
👶 2 trẻ nhỏ
🧒 3 trẻ lớn

→ Tổng: 11 người
→ Ghế cần: 9 ghế
→ Đề xuất: 1 bàn 6 chỗ + 1 bàn 4 chỗ
```

## 🎨 Giao Diện Customer

### Màn Hình Đặt Bàn

```
┌─────────────────────────────────────┐
│ 👤 Người lớn              [-] 2 [+] │
│    Cần ghế riêng                    │
├─────────────────────────────────────┤
│ 👶 Trẻ em nhỏ             [-] 1 [+] │
│    Dưới 5 tuổi - Ngồi cùng bố mẹ    │
├─────────────────────────────────────┤
│ 🧒 Trẻ em lớn             [-] 0 [+] │
│    Từ 5-12 tuổi - Cần ghế riêng     │
├─────────────────────────────────────┤
│ Tổng số người:              3 người │
│ 💺 Số ghế cần:              2 ghế   │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 👤 2 người lớn                      │
│ 👶 1 trẻ nhỏ (không cần ghế)        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Gợi ý: Chọn bàn 2 chỗ               │
└─────────────────────────────────────┘
```

### Phần Chọn Bàn

```
┌─────────────────────────────────────┐
│ Đã chọn: 1 bàn                      │
│ Tổng sức chứa: 4 ghế                │
│ Số ghế cần: 2 ghế                   │
├─────────────────────────────────────┤
│ ✓ Đủ chỗ                            │
└─────────────────────────────────────┘
```

Hoặc nếu chưa đủ:

```
┌─────────────────────────────────────┐
│ Đã chọn: 1 bàn                      │
│ Tổng sức chứa: 2 ghế                │
│ Số ghế cần: 4 ghế                   │
├─────────────────────────────────────┤
│ ✗ Chưa đủ chỗ (thiếu 2 ghế)        │
└─────────────────────────────────────┘
```

## 🎯 Giao Diện Staff

### Màn Hình Reservations

Staff thấy chi tiết rõ ràng:

```
┌──────────────────────────────────────┐
│ Gia đình Nguyễn - 19:00             │
│ 📞 0901234567                        │
├──────────────────────────────────────┤
│ 👤 Người lớn              2          │
│ 👶 Trẻ nhỏ (không ghế)   1          │
│ 🧒 Trẻ em (cần ghế)      2          │
├──────────────────────────────────────┤
│ Tổng số người:            5 người   │
│ 💺 Số ghế cần:            4 ghế     │
├──────────────────────────────────────┤
│ Bàn: 12                              │
├──────────────────────────────────────┤
│ [Xác nhận] [Khách đã đến] [Hủy]     │
└──────────────────────────────────────┘
```

## 🔧 Cập Nhật Models

### Reservation Interface

```typescript
interface Reservation {
  id: string;
  customerName: string;
  customerPhone: string;
  date: string;
  time: string;
  
  // Người lớn - Luôn cần ghế
  guestCount: number;
  
  // Trẻ em nhỏ - KHÔNG cần ghế
  childrenCount?: number;
  
  // Trẻ em lớn - CẦN ghế riêng
  childrenWithSeatCount?: number;
  
  tableIds: string[];
  status: 'pending' | 'confirmed' | 'seated' | 'completed' | 'cancelled';
  notes?: string;
  hasPreOrder?: boolean;
  preOrderItems?: OrderItem[];
  arrivalTime?: string;
}
```

### Helper Methods

```typescript
// Tổng số người (tất cả)
getTotalGuests(reservation: Reservation): number {
  return reservation.guestCount + 
         (reservation.childrenCount || 0) + 
         (reservation.childrenWithSeatCount || 0);
}

// Số ghế cần thiết (chỉ người cần ghế)
getTotalSeatsNeeded(reservation: Reservation): number {
  return reservation.guestCount + 
         (reservation.childrenWithSeatCount || 0);
}
```

## ✨ Tính Năng

### 1. Validation Thông Minh

```typescript
// Kiểm tra đủ chỗ ngồi
if (seatsNeeded > totalCapacity) {
  errorMessage = `Số ghế cần: ${seatsNeeded}, 
                  bàn đã chọn chỉ có ${totalCapacity} ghế`;
  return;
}
```

### 2. Đề Xuất Bàn Tự Động

Hệ thống đề xuất dựa trên **số ghế cần**, không phải tổng số người:

```typescript
getSuggestedTables(): string {
  const seatsNeeded = this.getTotalSeatsNeeded();
  
  if (seatsNeeded <= 2) return 'Gợi ý: Chọn bàn 2 chỗ';
  if (seatsNeeded <= 4) return 'Gợi ý: Chọn bàn 4 chỗ';
  if (seatsNeeded <= 6) return 'Gợi ý: Chọn bàn 6 chỗ';
  
  // Logic cho nhóm lớn
  const sixSeaters = Math.floor(seatsNeeded / 6);
  const remainder = seatsNeeded % 6;
  // ...
}
```

### 3. Hiển Thị Trực Quan

- **Icon rõ ràng**: 👤 (người lớn), 👶 (trẻ nhỏ), 🧒 (trẻ lớn)
- **Màu sắc phân biệt**: 
  - Tổng số người: Cam (#FF6B35)
  - Số ghế cần: Xanh lá (#10b981)
- **Status badges**:
  - ✓ Đủ chỗ: Xanh
  - ✗ Chưa đủ: Đỏ

## 📱 Responsive Design

### Mobile
```
┌─────────────────┐
│ 👤 Người lớn    │
│ Cần ghế riêng   │
│    [-] 2 [+]    │
├─────────────────┤
│ 👶 Trẻ em nhỏ   │
│ Ngồi cùng bố mẹ │
│    [-] 1 [+]    │
└─────────────────┘
```

### Tablet/Desktop
```
┌───────────────────────────────────────┐
│ 👤 Người lớn              [-] 2 [+]   │
│    Cần ghế riêng                      │
├───────────────────────────────────────┤
│ 👶 Trẻ em nhỏ             [-] 1 [+]   │
│    Dưới 5 tuổi - Ngồi cùng bố mẹ      │
└───────────────────────────────────────┘
```

## 🎯 Luồng Sử Dụng

### Khách Hàng
1. Chọn số người lớn
2. Chọn số trẻ em nhỏ (nếu có)
3. Chọn số trẻ em lớn (nếu có)
4. Xem tổng số người và số ghế cần
5. Xem gợi ý bàn
6. Chọn bàn phù hợp
7. Xem trạng thái: Đủ chỗ / Chưa đủ chỗ
8. Điền thông tin và đặt bàn

### Staff
1. Xem danh sách reservations
2. Thấy rõ breakdown:
   - 👤 Người lớn
   - 👶 Trẻ nhỏ (không ghế)
   - 🧒 Trẻ em (cần ghế)
3. Thấy tổng số người
4. Thấy số ghế cần
5. Chuẩn bị bàn phù hợp
6. Check-in khách

## 🔄 Ưu Điểm

### 1. Rõ Ràng
- Khách hiểu rõ cần nhập gì
- Staff biết cần chuẩn bị bao nhiêu ghế
- Tránh confusion khi đặt bàn

### 2. Linh Hoạt
- Phù hợp mọi loại gia đình
- Tối ưu hóa sử dụng bàn
- Tránh lãng phí chỗ ngồi

### 3. Chính Xác
- Tính toán đúng số ghế cần
- Đề xuất bàn phù hợp
- Validation chặt chẽ

### 4. Trải Nghiệm Tốt
- UI trực quan với icon
- Thông báo rõ ràng
- Hướng dẫn dễ hiểu

## 📊 Thống Kê

```typescript
// Ví dụ báo cáo:
interface BookingStats {
  totalPeople: number;      // Tổng số người (bao gồm trẻ em)
  adults: number;           // Người lớn
  youngChildren: number;    // Trẻ nhỏ (không ghế)
  olderChildren: number;    // Trẻ lớn (cần ghế)
  seatsUsed: number;        // Tổng ghế đã dùng
  efficiency: number;       // % sử dụng ghế
}
```

## 🚀 Kết Luận

Hệ thống mới giải quyết hoàn toàn vấn đề phân biệt chỗ ngồi cho trẻ em:

✅ **Rõ ràng**: 3 nhóm phân biệt rõ (người lớn, trẻ nhỏ, trẻ lớn)
✅ **Chính xác**: Tính đúng số ghế cần thiết
✅ **Trực quan**: Icon + màu sắc + text mô tả
✅ **Thông minh**: Đề xuất bàn tự động
✅ **Linh hoạt**: Phù hợp mọi trường hợp

Khách hàng và Staff đều hiểu rõ và dễ sử dụng!

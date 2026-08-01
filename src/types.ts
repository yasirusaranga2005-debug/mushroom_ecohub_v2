export type UserRole = 'admin' | 'grower' | 'buyer' | 'trainer' | 'partner' | 'staff';

export interface UserProfile {
  uid: string;
  fullName: string;
  phone: string;
  email: string;
  role: UserRole;
  district?: string;
  city?: string;
  experienceLevel?: string;
  interestedArea?: string;
  monthlyCapacity?: string;
  message?: string;
  status: 'Pending Verification' | 'Under Review' | 'Approved' | 'Rejected' | 'Suspended';
  createdAt: string;
  // Enriched real-world attributes
  membershipId?: string;
  bio?: string;
  preferredLanguage?: 'EN' | 'SI';
  licenseNumber?: string;
  productionArea?: string;
  gpsCoordinates?: string;
  password?: string;
  businessName?: string;
  ownerName?: string;
  businessRegistration?: string;
  nic?: string;
  businessDescription?: string;
  uploadedDocuments?: string[];
  productImages?: string[];
  packaging?: string[];
  certifications?: string[];
  verificationNotes?: string;
}

export interface EcosystemMember {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  district: string;
  city: string;
  role: UserRole;
  experienceLevel: string;
  interestedArea: string;
  monthlyCapacity: string;
  message: string;
  status: 'Pending Verification' | 'Under Review' | 'Approved' | 'Rejected' | 'Suspended';
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  district: string;
  supplierName: string;
  supplierId: string;
  ownerId?: string;
  ownerType?: 'admin' | 'partner';
  minimumOrder: string;
  monthlyCapacity: string;
  priceRange: string;
  imageUrl: string;
  images?: string[];
  status: 'Available' | 'Out of Stock';
  approvalStatus?: 'Draft' | 'Pending Review' | 'Approved' | 'Rejected' | 'Changes Requested' | 'Hidden' | 'Suspended';
  rejectionReason?: string;
  adminNotes?: string;
  submittedAt?: string;
  reviewedAt?: string;
  reviewedBy?: string;
  createdAt: string;
}

export interface BuyerInquiry {
  id: string;
  buyerName: string;
  phone: string;
  email: string;
  productId: string;
  productName: string;
  requiredQuantity: string;
  deliveryLocation: string;
  message: string;
  status: 'New' | 'Contacted' | 'In Discussion' | 'Converted' | 'Closed';
  createdAt: string;
  supplierId: string;
  buyerId?: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  whoItIsFor: string;
  duration: string;
  format?: string; // Kept for backwards compatibility
  description?: string;
  location?: string;
  price?: string;
  contactNumber?: string;
  certificate?: 'Yes' | 'No' | 'Optional' | string;
  features?: string | string[];
  createdAt: string;
}

export interface TrainingRequest {
  id: string;
  name: string;
  phone: string;
  email?: string;
  district: string;
  trainingInterest: string; // training program ID or custom name
  preferredFormat: string;
  message: string;
  status: 'New' | 'Contacted' | 'Scheduled' | 'Completed';
  createdAt: string;
}

export interface Opportunity {
  id: string;
  title: string;
  type: string; // 'Requirement' | 'Supply' | 'Partnership' | 'Training'
  district: string;
  status: 'Active' | 'Closed';
  details: string;
  createdAt: string;
}

export interface OpportunityApplication {
  id: string;
  name: string;
  phone: string;
  role: string;
  message: string;
  opportunityId: string;
  opportunityTitle: string;
  status: 'New' | 'Reviewed' | 'Accepted' | 'Rejected';
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  createdAt: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  type: 'Info' | 'Urgent' | 'Success';
  date: string;
}

export interface MachineryInquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  machineName: string;
  category: string;
  intendedProduct: string;
  dailyCapacity: string;
  location: string;
  message: string;
  status: 'New' | 'Contacted' | 'In Discussion' | 'Quoted' | 'Closed';
  createdAt: string;
}

export interface MachineItem {
  id: string;
  category?: string;
  nameEN: string;
  nameSI: string;
  descriptionEN: string;
  descriptionSI: string;
  featuresEN: string[];
  featuresSI: string[];
  specs: {
    capacity: string;
    power: string;
    material: string;
    weight: string;
  };
  priceRange: string;
  imageUrl: string;
  tags: string[];
  createdAt?: string;
}

export interface AppNotification {
  id: string;
  userId: string; // 'public' or specific user's uid
  title: string;
  message: string;
  type: 'info' | 'security' | 'success' | 'alert';
  read: boolean;
  createdAt: string;
}

export interface SecurityAuditLog {
  id: string;
  userId: string;
  userEmail: string;
  action: string;
  details: string;
  ipAddress?: string;
  userAgent?: string;
  createdAt: string;
}

export interface ProductInquiry {
  id: string;
  productId: string;
  productName: string;
  ownerId: string;
  ownerType: 'admin' | 'partner';
  name: string;
  company?: string;
  email: string;
  phone: string;
  country: string;
  quantity: string;
  message: string;
  status: 'Pending Inquiries' | 'Answered' | 'Closed';
  createdAt: string;
}

export interface Order {
  id: string;
  productId: string;
  productName: string;
  ownerId: string;
  ownerType: 'admin' | 'partner';
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    district?: string;
    country: string;
    postalCode: string;
  };
  quantity: number;
  unitPrice?: number;
  orderTotal: number;
  platformCommission: number;
  partnerEarnings: number;
  paymentStatus?: 'Pending' | 'Paid' | 'Cash on Delivery';
  notes: string;
  status: 'Pending' | 'Accepted' | 'Preparing' | 'Ready For Quality Check' | 'Quality Approved' | 'Dispatched' | 'Delivered' | 'Completed';
  rejectionReason?: string;
  qualityCheck?: {
    productPhotos: string[];
    packagingPhotos: string[];
    batchNumber: string;
    manufacturingDate: string;
    expiryDate: string;
    notes: string;
    adminNotes?: string;
  };
  createdAt: string;
  history?: { status: string; timestamp: string; }[];
}

export interface Wallet {
  id: string;
  partnerId: string;
  balance: number;
  pendingEarnings: number;
  availableBalance: number;
  commissionRate: number;
}

export interface WithdrawalRequest {
  id: string;
  partnerId: string;
  amount: number;
  status: 'Pending' | 'Approved' | 'Rejected';
  requestedAt: string;
  processedAt?: string;
}

export interface ProductReview {
  id: string;
  productId: string;
  orderId: string;
  customerId: string;
  rating: number;
  comment: string;
  images?: string[];
  createdAt: string;
}

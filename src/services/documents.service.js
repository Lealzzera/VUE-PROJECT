import { ApiService } from '@/axios'

export const getDocuments = (page, total) => {
    return ApiService.get('endpoint')
}